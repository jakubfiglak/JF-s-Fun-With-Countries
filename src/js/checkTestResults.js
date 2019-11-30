import {
    q
} from './generateTest';

export async function checkResults() {
    try {
        console.log('Checking test results...');
        console.log(q);
    } catch (error) {
        console.log(error);
    }
}