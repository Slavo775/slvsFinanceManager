import Category from '../models/category'
import DatabaseError from '../errors/DatabaseError'
import { CATEGORY_NOT_FOUND_CODE, CATEGORY_NOT_FOUND_MESSAGE } from '../config/errorCodes'

export default class CategoryService {
    public async addCategory(category: object): Promise<void> {
        const categoryModel = new Category(category)
        await categoryModel.save()
    }

    public async findCategories(idUser: string): Promise<object> {
        const categories = await Category.find({idUser})
        return categories
    }

    public async deleteCategory (idUser: string, idCategory: string): Promise<void> {
        const category = await Category.findOne({idUser, _id: idCategory})
        if (!category) {
            throw new DatabaseError(CATEGORY_NOT_FOUND_MESSAGE, CATEGORY_NOT_FOUND_CODE)
        }
        await Category.deleteOne({idUser, _id: idCategory})
    }

    public async updateCategory (idUser:string, categoryData: Record<string, string>, idCategory: string): Promise<void> {
        const category = await Category.findOne({idUser, _id: idCategory})
        if (!category) {
            throw new DatabaseError(CATEGORY_NOT_FOUND_MESSAGE, CATEGORY_NOT_FOUND_CODE)
        }

        await Category.updateOne({_id: idCategory}, categoryData) }
}