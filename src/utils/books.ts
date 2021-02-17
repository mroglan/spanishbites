import database from '../database/database'
import {DBBook} from '../database/dbInterfaces'
import {ObjectId} from 'mongodb'

export const getAllUnpopulatedBooks = async () => {
    const db = await database()

    const books:DBBook[] = await db.collection('books').find({}).toArray()

    return books
}

export const getAllBooks = async () => {
    const db = await database()

    const books:DBBook[] = await db.collection('books').aggregate([
        {$lookup: {
            from: 'authors',
            localField: 'authors',
            foreignField: '_id',
            as: 'authors'
        }}
    ]).toArray()

    return books
}

export const getBook = async (id:ObjectId) => {
    const db = await database()

    const book:DBBook[] = await db.collection('books').aggregate([
        {$match: {'_id': new ObjectId(id)}},
        {$lookup: {
            from: 'timePeriods',
            localField: 'timePeriod',
            foreignField: '_id',
            as: 'timePeriod'
        }},
        {$unwind: '$timePeriod'},
        {$lookup: {
            from: 'authors',
            localField: 'authors',
            foreignField: '_id',
            as: 'authors'
        }},
        {$lookup: {
            from: 'genres',
            localField: 'genres',
            foreignField: '_id',
            as: 'genres'
        }}
    ]).toArray()

    return book[0]
}