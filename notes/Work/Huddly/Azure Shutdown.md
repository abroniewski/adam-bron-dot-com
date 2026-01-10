# Step 1 – Azure Project Resource Inventory & Assessment

- Reviewed all active Azure resources under the `Coherence Azure Subscription 1`.
- Identified that the `deep-connect` resource group contains:
  - 2 app services (Node.js API and Django API)
  - 1 static web app (frontend)
  - 1 SQL database with attached server
  - 1 storage account for uploaded files and images
  - Multiple Application Insights & Log Analytics instances
  - An unused Key Vault and two B2C tenants created by Brett
- Confirmed that Azure is not the preferred cloud provider going forward — future deployments will use platforms like Railway or Vercel.
- Goal: Preserve all useful application logic, configurations, and test data while preparing for a clean shutdown.
- Next actions will include disconnecting GitHub deployments, backing up code or data where needed, and documenting all decisions.

![[Pasted image 20250409121143.png]]


### Step 2.1 – Disconnected Azure Deployments & Exported Env Vars

- Disconnected GitHub repo integrations from:
  - `deep-connect-api` App Service
  - `deepconnect-django-app` App Service

- Exported environment variables from both services via:
  - Azure Portal → App Service → Settings → Configuration → Application Settings
- Saved key-value pairs into a `.env.sample` file for future setup in Railway or Vercel.

Outcome: Codebases are no longer linked to Azure Deployment Center and all important config values have been preserved.
#### deep-connect-api environment variables
	[
	
	{
	
	"name": "APPLICATIONINSIGHTS_CONNECTION_STRING",
	
	"value": "InstrumentationKey=7018075f-4521-45ef-ac2f-84d1dfdddf85;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/;LiveEndpoint=https://westus2.livediagnostics.monitor.azure.com/;ApplicationId=a5693e2a-3f98-4585-850f-acf5ce7e0615",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "APPLICATIONINSIGHTSAGENT_EXTENSION_ENABLED",
	
	"value": "true",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "ApplicationInsightsAgent_EXTENSION_VERSION",
	
	"value": "~3",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "AZURE_STORAGE_ACCOUNT_KEY",
	
	"value": "REPLACE-WITH-ACTUAL-STORAGE-KEY",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "AZURE_STORAGE_ACCOUNT_NAME",
	
	"value": "deepconnectfilestorage",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "AZURE_STORAGE_CONTAINER_NAME",
	
	"value": "user-file-uploads",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "BASE_URL",
	
	"value": "https://ambitious-field-00c41fa1e.5.azurestaticapps.net",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DATABASE_URL",
	
	"value": "mssql://deepconnectadmin:PASSWORD-HERE@deep-connect-server.database.windows.net:3000/deep-connect-db",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DB_DATABASE",
	
	"value": "deep-connect-db",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DB_DIALECT",
	
	"value": "mssql",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DB_HOST",
	
	"value": "deep-connect-server.database.windows.net",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DB_PASSWORD",
	
	"value": "PASSWORD-HERE",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "DB_USERNAME",
	
	"value": "deepconnectadmin",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "JWT_EXPIRES_IN",
	
	"value": "1h",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "JWT_SECRET",
	
	"value": "JWT-SECRET-HERE",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "PORT",
	
	"value": "3000",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "SCM_DO_BUILD_DURING_DEPLOYMENT",
	
	"value": "true",
	
	"slotSetting": false
	
	},
	
	{
	
	"name": "WEBSITE_HTTPLOGGING_RETENTION_DAYS",
	
	"value": "7",
	
	"slotSetting": false
	
	}
	
	]
#### deepconnect-django app environment variables
[

{

"name": "APPLICATIONINSIGHTS_CONNECTION_STRING",

"value": "InstrumentationKey=9c44e504-33c0-4120-9af6-b23284ed5b0a;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/;LiveEndpoint=https://westus2.livediagnostics.monitor.azure.com/;ApplicationId=APPLICATION-ID-HERE",

"slotSetting": false

},

{

"name": "ApplicationInsightsAgent_EXTENSION_VERSION",

"value": "~3",

"slotSetting": true

},

{

"name": "AZURE_STORAGE_ACCOUNT_KEY",

"value": "REPLACE-WITH-ACTUAL-STORAGE-KEY",

"slotSetting": false

},

{

"name": "AZURE_STORAGE_ACCOUNT_NAME",

"value": "deepconnectfilestorage",

"slotSetting": false

},

{

"name": "AZURE_STORAGE_CONTAINER_NAME",

"value": "user-file-uploads",

"slotSetting": false

},

{

"name": "DB_HOST",

"value": "deep-connect-server.database.windows.net",

"slotSetting": false

},

{

"name": "DB_NAME",

"value": "deep-connect-db",

"slotSetting": false

},

{

"name": "DB_PASSWORD",

"value": "PASSWORD-HERE",

"slotSetting": false

},

{

"name": "DB_PORT",

"value": "1433",

"slotSetting": false

},

{

"name": "DB_USER",

"value": "deepconnectadmin",

"slotSetting": false

},

{

"name": "DEBUG",

"value": "false",

"slotSetting": false

},

{

"name": "DISABLE_COLLECTSTATIC",

"value": "true",

"slotSetting": false

},

{

"name": "DJANGO_ENV",

"value": "prod",

"slotSetting": false

},

{

"name": "OPENAI_API_KEY",

"value": "OpenAI-api-key",

"slotSetting": false

},

{

"name": "SCM_DO_BUILD_DURING_DEPLOYMENT",

"value": "true",

"slotSetting": false

},

{

"name": "SECRET_KEY",

"value": "JWT-SECRET-HERE",

"slotSetting": false

},

{

"name": "SERVER_PORT",

"value": "8000",

"slotSetting": false

},

{

"name": "TEMPLATE_PATH",

"value": "apps/report_generation/static/templates/quantabite_report_template.txt",

"slotSetting": false

},

{

"name": "WEBSITE_URL",

"value": "https://ambitious-field-00c41fa1e.5.azurestaticapps.net",

"slotSetting": false

},

{

"name": "WKHTMLTOPDF_PATH",

"value": "~/wkhtmltopdf/bin/wkhtmltopdf.exe",

"slotSetting": false

},

{

"name": "XDT_MicrosoftApplicationInsights_Mode",

"value": "default",

"slotSetting": true

}

]


### S

![[Pasted image 20250409143526.png]]

![[Pasted image 20250409143812.png]]


