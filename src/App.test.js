import rewire from "rewire"
import React from "react"
import { render } from "@testing-library/react"
const App = rewire("./App")
const reducer = App.__get__("reducer")
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("reducer", () => {
    test("0", () => {
        let callFunction = () => {
            reducer({}, { payload: { currentTeamIndex: "bc23a9d531064583ace8f67dad60f6bb", currentTeam: 12345 }, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducer({}, { payload: { currentTeamIndex: 12345, currentTeam: "bc23a9d531064583ace8f67dad60f6bb" }, type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reducer("Abruzzo", { payload: { currentTeamIndex: "bc23a9d531064583ace8f67dad60f6bb", currentTeam: "bc23a9d531064583ace8f67dad60f6bb" }, type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reducer({}, { payload: { currentTeamIndex: 9876, currentTeam: "da7588892" }, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reducer({}, { payload: { currentTeamIndex: 9876, currentTeam: 12345 }, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reducer(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
