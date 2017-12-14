export class Upload {
    $key: string;//uploading
    file: File;//file name
    url: string;//url link
    progress: number;//the progess of uploading
    createdOn: Date = new Date();//update the list with the data
    name: string;

    constructor(file: File) {
        this.file = file;
    }
}
