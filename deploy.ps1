[CmdletBinding(SupportsShouldProcess)]
param (
  [string]
  $rg = "nicknoonanresourcegroup",
  [string]
  $accountEmail = "nicknoonan86@gmail.com",
  [string]
  $acr = "nicknoonan.azurecr.io",
  [string]
  $acrUser = "nicknoonan",
  [string]
  $acrPass = "ftU+5U2jLTU2lxgV9Q5n9tf63lJMR3g9",
  [string]
  $containerCpu = "1",
  [string]
  $containerMemory = "1",
  [string]
  $tag = "prod",
  [string]
  $rtype = "Microsoft.ContainerInstance/containerGroups",
  [string]
  $image = ("{0}/{1}:{2}" -f $acr,"portfolio",$tag),
  [string]
  $env = "prod",
  [string]
  $containerName = "test-container",#("{0}-{1}" -f $env, "portfolio"),
  [string]
  $dnsZone = "nicknoonan.net"
)

$account = az account show | convertfrom-json
if ($account -and ($account.user.name -eq $accountEmail) -and ($account.state -eq "Enabled")) {
  write-host "logged in already";
}
else {
  az login
}

Write-Host "#################################################"
Write-Host "#                   Building                    #"
Write-Host "#################################################"
if ($PSCmdlet.ShouldProcess($image,"build")) {
  docker build -f Dockerfile -t $image .
}

Write-Host "#################################################"
Write-Host "#                    Pushing                    #"
Write-Host "#################################################"
if ($PSCmdlet.ShouldProcess($image, "push")) {
  docker push $image
}

Write-Host "#################################################"
Write-Host "#               Deploy Container               #"
Write-Host "#################################################"
$rglist = az resource list -g $rg | convertfrom-json -depth 10
$resource = $rglist | where { ($_.type -eq $rtype) -and ($_.name -eq $containerName) }
if ($resource) {
  Write-Host "Container resource already exists."
  $containerResource = az container show --ids $resource.id | ConvertFrom-Json -depth 10;
}
else {
  if ($PSCmdlet.ShouldProcess($containerName, "create container instance")) {
    Write-Host "Creating container instance `"$containerName`"";
    $containerResource = az container create `
      --resource-group $rg `
      --name $containerName `
      --image $image `
      --cpu $containerCpu `
      --memory $containerMemory `
      --ports 80 `
      --ip-address "Private" `
      --subnet "default" `
      --vnet "vn-nicknoonan" `
      --registry-password $acrPass `
      --registry-username $acrUser
    $containerResource = $containerResource | ConvertFrom-Json -depth 10
  }
}
#az container restart --name $container --resource-group $rg;

# Write-Host "#################################################";
# Write-Host "#                  Update DNS                   #";
# Write-Host "#################################################";
# if ($env.ToLower() -in "prod","production") {
#   $recordName = "@";
#   $url = $dnsZone;
# }
# else {
#   $recordName = $env;
#   $url = ("{0}.{1}" -f $env, $dnsZone);
# }

# if ($PSCmdlet.ShouldProcess(("{0}.{1}" -f $recordName, $dnsZone), "set A record")) {
#   Write-Host ("Set `"{0}.{1}`" to `"{2}`"" -f $recordName, $dnsZone, $containerResource.ipAddress.ip);
#   $deleteRecord = az network dns record-set a delete `
#     --resource-group $rg `
#     --zone-name $dnsZone `
#     --name $recordName `
#     --yes
#   $setRecord = az network dns record-set a add-record `
#     --resource-group $rg `
#     --zone-name $dnsZone `
#     --ipv4-address $containerResource.ipAddress.ip `
#     --record-set-name $recordName;
# }
Write-Host "#################################################";
Write-Host "#                 Health Check                  #";
Write-Host "#################################################";
$timeout = 300;
$interval = 10;

