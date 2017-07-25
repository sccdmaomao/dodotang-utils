D:
cd D:\my-files\dodotang

Start /wait "build" yarn build /N
XCOPY D:\my-files\dodotang\dist\* D:\my-files\dodotang-server\public /Y