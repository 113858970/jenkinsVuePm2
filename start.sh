cnpm i&&
npm run build&&
rm -rf ./target&&
rm -rf nohup.out&&
mkdir ./target&&
cp ./nuxt.config.js ./target&&
cp ./package.json ./target&&
cp -a ./build ./target&&
cd target &&
tar -zcvf target.tar.gz *&&
cp target.tar.gz /root/project/jenkinsVuePm2&&
cd /root/project/jenkinsVuePm2&&
tar -xzvf target.tar.gz &&
cnpm i&&
# pm2 启动时读取的配置文件
##configFile="pm2.config.json"&&
# 先杀掉所有 pm2 启动的项目
pm2 kill&&
# 跟据指定的配置文件信息，重新启动 pm2
##pm2 startOrGracefulReload $configFile&&
# reset all metadata
 pm2 start npm --name ‘jenkinsVuePm2’ -- start
