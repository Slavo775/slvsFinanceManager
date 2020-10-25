import ValidationError from '../errors/ValidationError'
import SaveValidation from '../utils/requestValidations/saveValidation'
import { ID_RECEIPT_MISSING_CODE, ID_RECEIPT_MISSING_MESSAGE, ID_USER_MISSING_CODE, ID_USER_MISSING_MESSAGE, RECEIPT_OBJECT_MISSING_CODE, RECEIPT_OBJECT_MISSING_MESSAGE, RECEIPT_NOT_FOUND_CODE } from '../config/errorCodes'
import SaveService from '../services/saveService'

export default class SaveController {

    public async addSave(requestBody: object): Promise<void> {
        const validation = new SaveValidation()
        await validation.addSave(requestBody)
        const service = new SaveService()
        await service.addSave(requestBody)
    }

    public async getSaves (requestBody: {idUser: string}): Promise<object> {
        if (!requestBody.hasOwnProperty('idUser')) {
            throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
        }
        const service = new SaveService()
        return await service.findSaves(requestBody.idUser)
    }

    public async deleteSave(idUser: string, idSave: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!idSave) {
                throw new ValidationError(ID_RECEIPT_MISSING_MESSAGE, ID_RECEIPT_MISSING_CODE)
            }

            const service = new SaveService()
            await service.deleteSave(idUser, idSave)
        }
        catch (error) {
            throw error
        }

    }

    public async updateSave(idUser:string, body: Record<string, string>, idSave: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!body) {
                throw new ValidationError(RECEIPT_OBJECT_MISSING_MESSAGE, RECEIPT_NOT_FOUND_CODE)
            }
            if (!idSave) {
                throw new ValidationError(ID_RECEIPT_MISSING_MESSAGE, ID_RECEIPT_MISSING_CODE)
            }
            delete body.idUser
            const service = new SaveService()
            await service.updateSave(idUser, body, idSave)
        }
        catch (error) {
            throw error
        }
    }
}