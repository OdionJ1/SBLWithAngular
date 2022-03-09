
export class FileValidator {

    static isValidEbook(file: FileList): boolean {
        const allowableExtention: RegExp = /(\.pdf|\.epub|\.txt)$/i;
        return !!allowableExtention.exec(file[0].name)
    }

    static isValidImage(file: FileList): boolean{
        const allowableExtention: RegExp = /(\.jpeg|\.png|\.jpg)$/i;
        return !!allowableExtention.exec(file[0].name)
    }
}