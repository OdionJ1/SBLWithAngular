import { Injectable } from "@angular/core";


@Injectable()
export class ConfigService {
    private basePath: string = "http://localhost:8080/api/"

    public getPath(path: string): string {
        const fullPath = this.basePath + path
        return fullPath
    }
}