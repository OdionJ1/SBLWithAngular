import { Injectable } from "@angular/core";


@Injectable()
export class ConfigService {
    private basePath: string = "https://localhost:44337/api/"

    public getPath(path: string): string {
        const fullPath = this.basePath + path
        return fullPath
    }
}