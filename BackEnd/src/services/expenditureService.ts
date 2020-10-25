import Expenditure from '../models/expenditure'
import DatabaseError from '../errors/DatabaseError'
import { EXPENDITURE_NOT_FOUND_CODE, EXPENDITURE_NOT_FOUND_MESSAGE } from '../config/errorCodes'

export default class ExpenditureService {
    public async addExpenditure(expenditure: object): Promise<void> {
        const ExpenditureModel = new Expenditure(expenditure)
        await ExpenditureModel.save()
    }

    public async findExpenditures(idUser: string): Promise<object> {
        const categories = await Expenditure.find({idUser})
        return categories
    }

    public async deleteExpenditure (idUser: string, idExpenditure: string): Promise<void> {
        const expenditure = await Expenditure.findOne({idUser, _id: idExpenditure})
        if (!expenditure) {
            throw new DatabaseError(EXPENDITURE_NOT_FOUND_MESSAGE, EXPENDITURE_NOT_FOUND_CODE)
        }
        await Expenditure.deleteOne({idUser, _id: idExpenditure})
    }

    public async updateExpenditure (idUser:string, ExpenditureData: Record<string, string>, idExpenditure: string): Promise<void> {
        const expenditure = await Expenditure.findOne({idUser, _id: idExpenditure})
        if (!expenditure) {
            throw new DatabaseError(EXPENDITURE_NOT_FOUND_MESSAGE, EXPENDITURE_NOT_FOUND_CODE)
        }

        await Expenditure.updateOne({_id: idExpenditure}, ExpenditureData) }
}