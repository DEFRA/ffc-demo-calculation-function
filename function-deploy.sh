#!/bin/bash

location="northeurope"

[ "$#" -eq  "0" ] && { echo "No arguments supplied"; exit 1; }

for ARGUMENT in "$@"
  do
    KEY=$(echo $ARGUMENT | cut -f1 -d=)
    VALUE=$(echo $ARGUMENT | cut -f2 -d=)   

    case "$KEY" in
            RESOURCE_GROUP)    	RESOURCE_GROUP=${VALUE} ;;
            STORAGE_ACCOUNT_NAME) STORAGE_ACCOUNT_NAME=${VALUE} ;;   
            APP_INSIGHTS_NAME) 	  APP_INSIGHTS_NAME=${VALUE} ;; 
            FUNCTION_APP_NAME) 	  FUNCTION_APP_NAME=${VALUE} ;;   
            SERVICE_BUS_CONNECTION) 	  SERVICE_BUS_CONNECTION=${VALUE} ;;   
            *)   
    esac    
done

echo "$SERVICE_BUS_CONNECTION"
exit 1

[ -z "$RESOURCE_GROUP" ] && { echo "No argument supplied for RESOURCE_GROUP"; exit 1; }
[ -z "$STORAGE_ACCOUNT_NAME" ] && { echo "No argument supplied for STORAGE_ACCOUNT_NAME"; exit 1; }
[ -z "$APP_INSIGHTS_NAME" ] && { echo "No argument supplied for APP_INSIGHTS_NAME"; exit 1; }
[ -z "$FUNCTION_APP_NAME" ] && { echo "No argument supplied for FUNCTION_APP_NAME"; exit 1; }
[ -z "$SERVICE_BUS_CONNECTION" ] && { echo "No argument supplied for SERVICE_BUS_CONNECTION"; exit 1; }

az group create -n $RESOURCE_GROUP -l $location

az storage account create -n $STORAGE_ACCOUNT_NAME -l $location -g $RESOURCE_GROUP --sku Standard_LRS

az resource create -g $RESOURCE_GROUP -n $APP_INSIGHTS_NAME --resource-type "Microsoft.Insights/components" --properties "{\"Application_Type\":\"web\"}"

az functionapp create -n $FUNCTION_APP_NAME --storage-account $STORAGE_ACCOUNT_NAME --consumption-plan-location $location --app-insights $APP_INSIGHTS_NAME --runtime node -g $RESOURCE_GROUP --functions-version 3

az functionapp config appsettings set -n $FUNCTION_APP_NAME -g $RESOURCE_GROUP --settings "serviceBusConnection=$SERVICE_BUS_CONNECTION"

func azure functionapp publish $FUNCTION_APP_NAME --javascript