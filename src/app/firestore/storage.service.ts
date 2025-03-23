import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private storage = getStorage();

    constructor() { }

    async getFileUrl(filePath: string): Promise<string> {
        const fileRef = ref(this.storage, filePath);
        return await getDownloadURL(fileRef);
    }
}
