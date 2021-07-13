// test id function to make sure it works
import id from './id';

test("ID", () => {
    const ids = []
    for(let i = 0; i < 10; i++) {
        let v = id();
        expect(v).toHaveLength(9);
        expect(ids).not.toContain(v);
    }
})