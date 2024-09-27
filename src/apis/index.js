import { baseModule } from "./config";

export const APIS = {
    uploadImage: (body) => baseModule.post("eye/", body, {
        headers: {
            "Content-Type": "multipart/form-data",  // Ensure correct content type
        },
    })
}
