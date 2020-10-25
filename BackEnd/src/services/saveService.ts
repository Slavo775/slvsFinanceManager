import Save from '../models/saves'
import DatabaseError from '../errors/DatabaseError'
import { SAVE_NOT_FOUND_CODE, SAVE_NOT_FOUND_MESSAGE } from '../config/errorCodes'

export default class SaveService {

    public async addSave(expenditure: object): Promise<void> {
        const SaveModel = new Save(expenditure)
        await SaveModel.save()
    }

    public async findSaves(idUser: string): Promise<object> {
        const saves = await Save.find({idUser})
        return saves
    }

    public async deleteSave (idUser: string, idSave: string): Promise<void> {
        const save = await Save.findOne({idUser, _id: idSave})
        // tslint:disable-next-line
        console.log(save)
        if (!save) {
            throw new DatabaseError(SAVE_NOT_FOUND_MESSAGE, SAVE_NOT_FOUND_CODE)
        }
        await Save.deleteOne({idUser, _id: idSave})
    }

    public async updateSave (idUser:string, SaveData: Record<string, string>, idSave: string): Promise<void> {
        const expenditure = await Save.findOne({idUser, _id: idSave})
        if (!expenditure) {
            throw new DatabaseError(SAVE_NOT_FOUND_MESSAGE, SAVE_NOT_FOUND_CODE)
        }

        await Save.updateOne({_id: idSave}, SaveData) }
}