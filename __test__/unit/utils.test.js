import { computeCount } from '../../app/redux/utils/computeCount';

describe('Todo utils tests', () => {
    test('It can compute the count of a list', () => {
        const list = [0, 1];
		
        expect(computeCount(list)).toBe(2);
    });
	
	test('It will match snap shot', () => {
        const list = [0, 1];
		
        expect(computeCount(list)).toMatchSnapshot();		
	});
});