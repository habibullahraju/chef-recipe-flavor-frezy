import React, {useRef} from "react";
import ReactPrint from "react-to-print";

const PDFblog = () => {
  const ref = useRef();

  return (
    <div>
      <div className="pdf">
        <div className="sss">
          <div ref={ref} className="a">
            <h2 className="my-10 text-center text-4xl font-semibold">
              I have answered some beatiful questions below
            </h2>
            <hr className="w-[80%] mx-auto" />
            <div className="grid md:grid-cols-2 gap-10 p-10">
              <div>
                <h2 className="font-semibold mb-2 text-lg">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h2>

                <p className="text-gray-600">
                  {" "}
                  <span className="font-semibold">
                    Controlled Components:
                  </span>{" "}
                  These components are governed by the component’s state and are
                  predictable.It accepts the prop’s current value.Improved
                  control over form values and data.It allows validation
                  control.
                  <br />
                  <span className="font-semibold">
                    Uncontrolled Components:
                  </span>
                  Are Uncontrolled because data loss during the life cycle
                  approaches.For their present values, a ref is used.Has only a
                  very small amount of control on form values and data.It does
                  not allow validation control.
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-lg">
                  How to validate React props using PropTypes?
                </h2>

                <p className="text-gray-600">
                  Below are the validators for the basic data types:
                  <li>PropTypes.any: The prop can be of any data type.</li>
                  <li>PropTypes.bool: The prop should be a Boolean.</li>
                  <li>PropTypes.number: The prop should be a number.</li>
                  <li>PropTypes.string: The prop should be a string.</li>
                  <li>PropTypes.func: The prop should be a function.</li>
                  <li>PropTypes.array: The prop should be an array.</li>
                  <li>PropTypes.object: The prop should be an object.</li>
                  <li>PropTypes.symbol: The prop should be a symbol.</li>
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-lg">
                  Tell us the difference between nodejs and express js.
                </h2>

                <p className="text-gray-600">
                  Express is a minimal and flexible node. js web application
                  framework, providing a robust set of features for building
                  single and multi-page, and hybrid web applications.Node.js is
                  an open-source, cross-platform JavaScript runtime environment
                  and library for running web applications outside the client's
                  browser.
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-lg">
                  What is a custom hook, and why will you create a custom hook?
                </h2>

                <p className="text-gray-600">
                A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks.it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inlinepy-10 flex justify-center py-10">
          <ReactPrint
            trigger={() => (
              <button className="btn text-center bg-[#C59D5F] border-none">
                Print and Download PDF
              </button>
            )}
            content={() => ref.current}
          ></ReactPrint>
        </div>
      </div>
    </div>
  );
};

export default PDFblog;
