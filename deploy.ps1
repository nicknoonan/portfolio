Write-Host "#################################################"
Write-Host "#                   Building                    #"
Write-Host "#################################################"
docker build -f Dockerfile -t portfolio:latest .
docker tag portfolio:latest nicknoonan.azurecr.io/portfolio:latest

Write-Host "#################################################"
Write-Host "#                    Pushing                    #"
Write-Host "#################################################"
docker push nicknoonan.azurecr.io/portfolio:latest

Write-Host "#################################################"
Write-Host "#               Restart Container               #"
Write-Host "#################################################"
az container restart --name portfolio --resource-group nicknoonanresourcegroup