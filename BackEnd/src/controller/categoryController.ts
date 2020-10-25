import CategoryValidation from '../utils/requestValidations/categoryValidation'
import CategoryService from '../services/categoryService'
import ValidationError from '../errors/ValidationError'
import DatabaseError from '../errors/DatabaseError'
import { ID_CATEGORY_MISSING_CODE, ID_CATEGORY_MISSING_MESSAGE, ID_USER_MISSING_CODE, ID_USER_MISSING_MESSAGE, CATEGORY_OBJECT_MISSING_CODE, CATEGORY_OBJECT_MISSING_MESSAGE, CATEGORY_NOT_FOUND_CODE } from '../config/errorCodes'
import UserController from './userController'
import category from '../models/category'

export default class CategoryController {

    public async addCategory(requestBody: object): Promise<void> {
        const validation = new CategoryValidation()
        await validation.addCategory(requestBody)
        const service = new CategoryService()
        await service.addCategory(requestBody)
    }

    public async getCategories (requestBody: {idUser: string}): Promise<object> {
        if (!requestBody.hasOwnProperty('idUser')) {
            throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
        }
        const service = new CategoryService()
        return await service.findCategories(requestBody.idUser)
    }

    public async deleteCategories(idUser: string, idCategory: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!idCategory) {
                throw new ValidationError(ID_CATEGORY_MISSING_MESSAGE, ID_CATEGORY_MISSING_CODE)
            }

            const service = new CategoryService()
            await service.deleteCategory(idUser, idCategory)
        }
        catch (error) {
            throw error
        }

    }

    public async updateCategories(idUser:string, body: Record<string, string>, idCategory: string): Promise<void> {
        try {
            if (!idUser) {
                throw new ValidationError(ID_USER_MISSING_MESSAGE, ID_USER_MISSING_CODE)
            }
            if (!body) {
                throw new ValidationError(CATEGORY_OBJECT_MISSING_MESSAGE, CATEGORY_NOT_FOUND_CODE)
            }
            if (!idCategory) {
                throw new ValidationError(ID_CATEGORY_MISSING_MESSAGE, ID_CATEGORY_MISSING_CODE)
            }
            delete body.idUser
            const service = new CategoryService()
            await service.updateCategory(idUser, body, idCategory)
        }
        catch (error) {
            throw error
        }
    }
}