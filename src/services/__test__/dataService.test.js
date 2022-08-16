import Axios from 'axios';
import dataService from '../dataService';
import {act} from '@testing-library/react';


describe("data service tests", () => {
    it("fetches team data", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data: {teams: []}})
        

        await act(async () => {
            dataService.fetchTeamsAsync(testFn);
        })


        expect(testFn).toHaveBeenCalledTimes(1);
    });
});