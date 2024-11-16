import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';


const auth = new GoogleAuth(
    {
        credentials: {
            client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        scopes: ['https://www.googleapis.com/auth/drive.file'],

    }
);

const drive = google.drive({version: 'v3', auth});

async function uploadImageToGoogleDrive(file){
    const response = await drive.files.create({
        requestBody: {
            name: file.name,
            mimeType: file.type,
        },
        media: {
            mimeType: file.type,
            body: file,
        },
    });



    return response.data.id;
}
