Tutorial: How to Start a Project from Scratch
Starting Docker Desktop

Open Docker Desktop on your computer. Make sure Docker is running and Kubernetes is enabled in Docker Desktop.
In Settings, verify that Kubernetes is enabled (Kubernetes is marked as "Running").
Checking the Kubernetes Cluster

In a terminal (e.g. PowerShell, Visual Studio Code terminal), type the following command to make sure Kubernetes is properly configured and running:

kubectl get nodes
This command should return a list of Kubernetes nodes, confirming that the cluster is healthy.
Deploying a Helm chart

Change to the directory where your Helm chart is located. If you are in a project, change to the my-chart directory:

cd C:\Dynamic_web_app\my-chart
Then start the deployment using Helm:

helm install my-release ./my-chart
This command will launch the application using the Helm chart and Kubernetes.
Checking the status of your pods

After successful deployment, check the status of your pods:

kubectl get pods
Make sure your pod is in the Running state.
Forwarding ports for local access

Ensure access to your application on your local machine using port-forward:

export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=my-chart,app.kubernetes.io/instance=my-release" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $POD_NAME 8080:8080
Then open a browser and navigate to:

http://127.0.0.1:8080
You should now see your application running.
Shutting down the application

To shut down the application, use the Helm command to remove the deployment:
bash
Copy code
helm uninstall my-release
This command stops and removes the application from the Kubernetes cluster.
