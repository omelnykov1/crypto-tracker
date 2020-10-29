import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import MainPage from '../main/main_page';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe('<MainPage />', () => {
   const Wrapper = shallow(<MainPage />);
  it('should be defined', () => {
    expect(MainPage).toBeDefined()
  })
  it("should render", () => {
    expect(toJson(Wrapper)).toMatchSnapshot()
    expect(Wrapper.hasClass("main")).toEqual(true);
  });
  it("shows welcome message", () => {
    expect(Wrapper.find('h1').text()).toEqual('Welcome to Crypto Tracker')
  })

  it("has all coints button", () => {
    expect(Wrapper.find('button').text()).toEqual('All Coins')
  })

  it('has searchbar', () => {
    expect(Wrapper.find('<SearchBar />'))
  })
})

