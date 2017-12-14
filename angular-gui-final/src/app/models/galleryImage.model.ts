export interface GalleryImage {
  $key?: string;//unqiue key for firebase
  name?: string;//name of the image taken from the upload and store it in the database
  url?: string;//link generated from the firebase 
}
