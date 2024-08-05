/* eslint-disable react/prop-types */


const FAQ = ({t}) => {
  return (
    <div>
      <div className="whyus-table">
        <div className="container">

          <div className="w-lg-50 mx-auto">
            
            <div className="accordion accordion-flush" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll1" aria-expanded="true" aria-controls="coll1">
                    <h5>
                      {t("")}
                    </h5>
                  </button>
                </h2>
                <div id="coll1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll2" aria-expanded="false" aria-controls="coll2">
                    <h5> What do you know about the Box Sizing property?</h5>
                  </button>
                </h2>
                <div id="coll2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    The Box Sizing property in CSS defines how developers should calculate the width and height of a box.

                    Content Box is when the default height and width get applied to the content of an element. The border and padding lie outside the box.

                    Padding Box is when the developer adds the dimensions to include the padding and content of the element. This adds a border outside the given box.

                    Border Box is when the box dimensions apply to the border, padding and content.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll3" aria-expanded="false" aria-controls="coll3">
                    <h5> Define the ways in which you can hide an element using CSS.</h5>
                  </button>
                </h2>
                <div id="coll3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    There are three ways to hide elements with CSS.

                    display:none can hide the content so that it doesn’t get stored in the DOM.

                    visibility:hidden adds an element to the DOM and occupies space. However, the user cannot see it.

                    position:absolute makes the element appear outside the screen, not on the screen.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll4" aria-expanded="false" aria-controls="coll4">
                    <h5> What does Callback mean in JavaScript?</h5>
                  </button>
                </h2>
                <div id="coll4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Callback is a JavaScript function that developers send as a parameter or argument to other functions. You can call this function whenever the function it is provided to gets called.
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default FAQ
