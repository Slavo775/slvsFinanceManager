import ValidationError from '../errors/ValidationError'
import ExpenditureValidation from '../utils/requestValidations/expenditureValidation'
import { ID_EXPENDITURE_MISSING_CODE, ID_EXPENDITURE_MISSING_MESSAGE, ID_USER_MISSING_CODE, ID_USER_MISSING_MESSAGE, EXPENDITURE_OBJECT_MISSING_CODE, EXPENDITURE_OBJECT_MISSING_MESSAGE, EXPENDITURE_NOT_FOUND_CODE } from '../config/errorCodes'
import ExpenditureService from '../services/expenditureService'

export default class ExpenditureController {

    public async addExpenditure(requestBody: object): Promise<void> {
        const validation = new ExpenditureValidation()
        await validation.addExpenditure(requestBody)
        const service = new ExpenditureService()
        await service.addExpenditure(requestBody)
    }

    public async getExpenditures (requestBody: {idUser: string}): Promise<object> {
        if (!requestBody.hasOwnProperty('idUser')) {
            throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
        }
        const service = new ExpenditureService()
        return await service.findExpenditures(requestBody.idUser)
    }

    public async deleteExpenditure(idUser: string, idExpenditure: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!idExpenditure) {
                throw new ValidationError(ID_EXPENDITURE_MISSING_MESSAGE, ID_EXPENDITURE_MISSING_CODE)
            }

            const service = new ExpenditureService()
            await service.deleteExpenditure(idUser, idExpenditure)
        }
        catch (error) {
            throw error
        }

    }

    public async updateExpenditure(idUser:string, body: Record<string, string>, idExpenditure: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!body) {
                throw new ValidationError(EXPENDITURE_OBJECT_MISSING_MESSAGE, EXPENDITURE_NOT_FOUND_CODE)
            }
            if (!idExpenditure) {
                throw new ValidationError(ID_EXPENDITURE_MISSING_MESSAGE, ID_EXPENDITURE_MISSING_CODE)
            }
            delete body.idUser
            const service = new ExpenditureService()
            await service.updateExpenditure(idUser, body, idExpenditure)
        }
        catch (error) {
            throw error
        }
    }
}