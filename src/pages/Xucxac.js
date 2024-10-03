import { Fragment } from "react";

function Xucxac(props) {
      const { xucXacItem } = props;
      return (
            <>
                  <Fragment>
                        <div className="scene ml-5">
                              <div className="cube" >
                                    <div className="cube__face front">
                                          <img src={xucXacItem.hinhAnh} alt=""  style={{ width: '100%' }} />
                                    </div>
                                    <div className="cube__face back">
                                          <img src='./img/cua.png' alt="" style={{ width: '100%' }} />
                                    </div>
                                    <div className="cube__face right">
                                          <img src='./img/tom.png' alt="" style={{ width: '100%' }} />

                                    </div>
                                    <div className="cube__face left">
                                          <img src='./img/ca.png' alt="" style={{ width: '100%' }} />

                                    </div>
                                    <div className="cube__face top">
                                          <img src='./img/ga.png' alt="" style={{ width: '100%' }} />

                                    </div>
                                    <div className="cube__face bottom">
                                          <img src='./img/nai.png' alt="" style={{ width: '100%' }} />

                                    </div>
                              </div>

                        </div>
                  </Fragment>
            </>
      )
}
export default Xucxac;