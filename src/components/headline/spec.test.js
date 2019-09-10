import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not trow a warning", () => {
      const expectedProps = {
        header: "Test header",
        description: "Test desc",
        tempArray: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "Test test@email.com",
            age: 33,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        description: "Test desc"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "Headline Component");
      expect(component.length).toBe(1);
    });

    it("Should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "Headline Component");
      expect(component.length).toBe(0);
    });
  });
});
