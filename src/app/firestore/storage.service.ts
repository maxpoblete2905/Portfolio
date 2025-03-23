import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL, listAll } from '@angular/fire/storage';


export interface FileData {
    name: string;
    url: string;
}

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private storage = getStorage();

    constructor() { }

    async getFileUrl(filePath: string): Promise<string> {
        const fileRef = ref(this.storage, filePath);
        try {
            return await getDownloadURL(fileRef);
        } catch (error) {
            console.error(`Archivo no encontrado: ${filePath}`, error);
            throw new Error("Archivo no encontrado");
        }
    }

    async getAllFileUrls(directoryPath: string): Promise<FileData[]> {
        const dirRef = ref(this.storage, directoryPath);

        try {
            const result = await listAll(dirRef); // Listar todos los archivos en el directorio
            const fileDataPromises: Promise<FileData | null>[] = result.items.map(async (fileRef) => {
                try {
                    const url = await getDownloadURL(fileRef);
                    return { name: fileRef.name, url }; // Retorna objeto con nombre y URL
                } catch (error) {
                    console.warn(`No se pudo obtener la URL de ${fileRef.fullPath}`, error);
                    return null; // Si hay error, retorna null
                }
            });

            // Filtramos los null antes de retornar
            const files = await Promise.all(fileDataPromises);
            return files.filter((file): file is FileData => file !== null); // Filtrado correcto

        } catch (error) {
            console.error(`Error al listar archivos en ${directoryPath}:`, error);
            return []; // Retornar array vacío si hay error
        }
    }
}
