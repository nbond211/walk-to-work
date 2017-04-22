import fs from 'fs';
import exif from 'jpeg-exif';
import getColors from 'get-image-colors';
import jsonfile from 'jsonfile';

async function getFileNames() {
    const photos = await fs.readdirSync('./photos');
    return photos;
}

async function getColorsFromPhoto(photo) {
    const colors = await getColors(`./photos/${photo}`);
    const hexColors = colors.map(color => color.hex());
    return hexColors;
}

async function getExifFromPhoto(photo) {
    const data = await exif.parseSync(`./photos/${photo}`);
    const result = {
        dateTime: data.DateTime,
        gpsLatitudeRef: data.GPSInfo.GPSLatitudeRef,
        gpsLatitude: data.GPSInfo.GPSLatitude,
        gpsLongitudeRef: data.GPSInfo.GPSLongitudeRef,
        gpsLongitude: data.GPSInfo.GPSLongitude,
    }
    return result;
}

async function createPhotoDataObject() {
    const fileNames = await getFileNames();
    const result = {};
    for (const photo of fileNames) {
        console.log(`Extracting data from ${photo}.`)
        const exifData = await getExifFromPhoto(photo);
        const colors = await getColorsFromPhoto(photo);
        result[photo] = exifData;
        result[photo].colors = colors;
    }
    return result;
}

async function writePhotoDataToFile(photoData) {
    await jsonfile.writeFileSync('./photo-data.json', photoData, {spaces: 2});
}

export default async function extractPhotoData() {
    const photoData = await createPhotoDataObject();
    await writePhotoDataToFile(photoData);
}
