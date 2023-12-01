# k8s-microserices-challenge

![TASK](https://github.com/AbdelrhmanAli123/k8s-microserices-challenge/assets/133269614/8cf5d2f9-9db3-4165-a625-6ca48ac73d9b)

## steps 
- first create two applications, in my case, i used nodejs APPs
- dockerize these two applications
- create deployment for each application
- expose these deployments using service

## notes
- the first app works on port 8081, you can use any port instaed
- the second app works on port 8888, you can use any port instaed
- the first app exposes the JSON on the route "/json"
- the second app fetchs the exposed JSON via the route "/fetch"
- in the API_URL env variable, you have to use the second service name and then the route 
