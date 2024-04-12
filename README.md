
# The Better Collective
## Augmented Reality Project for VeChain
This project is an Augmented Reality (AR) application built specifically for The Better Collection on the VeChain blockchain. It utilizes AR.js, a lightweight library for creating augmented reality experiences on the web.

### Installation
Clone the repository:
```git clone https://github.com/Smuzzies/tbc_arjs.git```

### Install dependencies:
```npm init
npm install axios express ar.js dotenv
```

### Create a .env file in the root directory and add the following environment variables:
```API_KEY=yourkey
KEY_PATH=/path/to/privkey.pem
CERT_PATH=/path/to/fullchain.pem
```
Replace yourkey with your actual API key, and /path/to/privkey.pem and /path/to/fullchain.pem with the paths to your private key and full chain certificate files, respectively.

### Start the server
```node server.js```

The application should now be running and accessible at the specified URL or IP address. The port used in this example is 8888 which can be changed by editing ```server.js```

### Usage

Once the application is running, you can experience the AR functionality by pointing your device's camera at various objects or surfaces. The AR content related to The Better Collection on the VeChain blockchain will be overlaid on the real-world view.

![image](https://github.com/Smuzzies/tbc_arjs/assets/110495122/8c9a276a-e24a-4f98-9679-60805d697f7a)

