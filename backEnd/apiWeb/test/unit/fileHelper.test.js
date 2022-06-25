import {
    describe,
    test,
    jest,
    expect
} from '@jest/globals'
import fs from 'fs'
import FileHelper from '../../src/fileHelper'
import Routes from '../../src/routes'

describe('#FileHelper', () => {
    describe('#getFileStatus', () => {
        test('it should return files statuses in correct format', async () => {
            const mockObj = {
                size: 266684,
                birthtime: '2022-06-22T20:53:27.164Z',
                owner: 'leandro',
                filename: 'file.png'
            }

            jest.spyOn(fs.promises, fs.promises.readdir.name)
                .mockResolvedValue([mockObj.filename])

            jest.spyOn(fs.promises, fs.promises.stat.name)
                .mockResolvedValue(mockObj)

            const result = await FileHelper.getFilesStatus("/tmp")

            const expectedResult = [
                {
                    size: "267 kB",
                    lastModified: mockObj.birthtime,
                    owner: mockObj.owner,
                    file: mockObj.filename
                }
            ]

            expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${mockObj.filename}`)
            expect(result).toMatchObject(result)
        })
    })
})