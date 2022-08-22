import Axios from 'axios';
import dataService from '../dataService';
import {act} from '@testing-library/react';


describe("Data Service Tests", () => {
    it("fetches list of teams", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data: {teams: [{id: 26, name: 'calgary flames'}, {id: 18, name: "montreal canadiens"}] }})
        
        await act(async () => { dataService.fetchTeamsAsync(testFn); });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith([{id: 26, name: 'calgary flames'}, {id: 18, name: "montreal canadiens"}]);
    });

    it("fetches individual team data", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data: { teams: [{roster: {roster: [{id: 1, position: 'C', firstName: 'Jerome', lastName: 'Iginla'}, {id: 1, position: 'LW', firstName: 'Lanny', lastName: 'MacDonald'}]}}] }});
        
        await act(async () => { dataService.fetchTeamAsync(testFn); });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith([{id: 1, position: 'C', firstName: 'Jerome', lastName: 'Iginla'}, {id: 1, position: 'LW', firstName: 'Lanny', lastName: 'MacDonald'}]);
    });

    it("fetches individual player information", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data: {people: [{id: 1, age: 26, team: 'calgary flames'}]}});
        
        await act(async () => { dataService.fetchPlayerInfoAsync(testFn); });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith({id: 1, age: 26, team: 'calgary flames'});
    });

    it("fetches individual player single season data given a date range", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data: {stats: [{splits: [{season: {year: 2020}, stat: []}] }]}});
        
        await act(async () => { dataService.fetchPlayerDataAsync(testFn, 25, {startYear: 2019, endYear: 2020}); });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith([{"data": [], "season": {"year": 2020}}, {"data": [], "season": {"year": 2020}}]);
    });

    it("fetches schedule data for given date range", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data:  {dates: [{homeTeam: 'calgary flames', awayTeam: 'toronto maple leafs'}] }});
        
        await act(async () => { dataService.fetchScheduleDataAsync(testFn, {startDate: '2020-05-14', endDate: '2020-05-16'}); });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith([{homeTeam: 'calgary flames', awayTeam: 'toronto maple leafs'}]);
    });

    it("fetches teams stats by year", async () => {
        const testFn = jest.fn(() => {});
        jest.spyOn(Axios, "get").mockResolvedValue({data:  { stats: [{splits: [{team: {name: 'calgary flames'}, stat: []}] }, {splits: [{stat: {record: '50-20-10'}}]} ] }});
        
        await act(async () => { dataService.fetchTeamStatsByYearAsync(testFn, 2019, 20) });

        expect(testFn).toHaveBeenCalledTimes(1);
        expect(testFn).toHaveBeenCalledWith([], {"record": "50-20-10"}, "calgary flames");
    });
});