import Receipt from '../models/income'
import DatabaseError from '../errors/DatabaseError'
import { RECEIPT_NOT_FOUND_CODE, RECEIPT_NOT_FOUND_MESSAGE } from '../config/errorCodes'

export default class ReceiptService {

    public async addReceipt(expenditure: object): Promise<void> {
        const ReceiptModel = new Receipt(expenditure)
        await ReceiptModel.save()
    }

    public async findReceipts(idUser: string): Promise<object> {
        const receipts = await Receipt.find({idUser})
        return receipts
    }

    public async deleteReceipt (idUser: string, idReceipt: string): Promise<void> {
        const receipt = await Receipt.findOne({idUser, _id: idReceipt})
        // tslint:disable-next-line
        console.log(receipt)
        if (!receipt) {
            throw new DatabaseError(RECEIPT_NOT_FOUND_MESSAGE, RECEIPT_NOT_FOUND_CODE)
        }
        await Receipt.deleteOne({idUser, _id: idReceipt})
    }

    public async updateReceipt (idUser:string, ReceiptData: Record<string, string>, idReceipt: string): Promise<void> {
        const expenditure = await Receipt.findOne({idUser, _id: idReceipt})
        if (!expenditure) {
            throw new DatabaseError(RECEIPT_NOT_FOUND_MESSAGE, RECEIPT_NOT_FOUND_CODE)
        }

        await Receipt.updateOne({_id: idReceipt}, ReceiptData) }
}