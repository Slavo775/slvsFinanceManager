import ValidationError from '../errors/ValidationError'
import ReceiptValidation from '../utils/requestValidations/receiptValidation'
import { ID_RECEIPT_MISSING_CODE, ID_RECEIPT_MISSING_MESSAGE, ID_USER_MISSING_CODE, ID_USER_MISSING_MESSAGE, RECEIPT_OBJECT_MISSING_CODE, RECEIPT_OBJECT_MISSING_MESSAGE, RECEIPT_NOT_FOUND_CODE } from '../config/errorCodes'
import ReceiptService from '../services/receiptService'

export default class ReceiptController {

    public async addReceipt(requestBody: object): Promise<void> {
        const validation = new ReceiptValidation()
        await validation.addReceipt(requestBody)
        const service = new ReceiptService()
        await service.addReceipt(requestBody)
    }

    public async getReceipts (requestBody: {idUser: string}): Promise<object> {
        if (!requestBody.hasOwnProperty('idUser')) {
            throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
        }
        const service = new ReceiptService()
        return await service.findReceipts(requestBody.idUser)
    }

    public async deleteReceipt(idUser: string, idReceipt: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!idReceipt) {
                throw new ValidationError(ID_RECEIPT_MISSING_MESSAGE, ID_RECEIPT_MISSING_CODE)
            }

            const service = new ReceiptService()
            await service.deleteReceipt(idUser, idReceipt)
        }
        catch (error) {
            throw error
        }

    }

    public async updateReceipt(idUser:string, body: Record<string, string>, idReceipt: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!body) {
                throw new ValidationError(RECEIPT_OBJECT_MISSING_MESSAGE, RECEIPT_NOT_FOUND_CODE)
            }
            if (!idReceipt) {
                throw new ValidationError(ID_RECEIPT_MISSING_MESSAGE, ID_RECEIPT_MISSING_CODE)
            }
            delete body.idUser
            const service = new ReceiptService()
            await service.updateReceipt(idUser, body, idReceipt)
        }
        catch (error) {
            throw error
        }
    }
}