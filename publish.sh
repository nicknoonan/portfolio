cd /home/nickdev/portfolio
sudo docker-compose build
sudo docker stop nick_portfolio_container > /dev/null
sudo docker container rm nick_portfolio_container > /dev/null
sudo docker create -p 80:80 --name nick_portfolio_container nick_portfolio:latest
sudo docker start nick_portfolio
