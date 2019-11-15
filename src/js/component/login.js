import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		handleClose: false,
		handleShow: false,
		show: false
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	render() {
		return (
			<>
				<Button variant="primary" onClick={() => this.handleShow()}>
					Registro
				</Button>
				<Modal show={this.state.show} onHide={this.handleClose} animation={true}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body closeButton>
						<div
							className="modal-fade"
							id="modalLRForm"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="myModalLabel"
							aria-hidden="true">
							<div className="modal-dialog cascading-modal" role="document">
								<div className="modal-content">
									<div className="modal-c-tabs">
										<ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
											<li className="nav-item">
												<a
													className="nav-link active darken-3"
													data-toggle="tab"
													href="#panel7"
													role="tab">
													<i className="fas fa-user mr-1"></i>
													Login
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#panel8" role="tab">
													<i className="fas fa-user-plus mr-1"></i>
													Register
												</a>
											</li>
										</ul>
										<div className="tab-content">
											<div className="tab-pane fade in show active" id="panel7" role="tabpanel">
												<div className="modal-body mb-1">
													<div className="md-form form-sm mb-5">
														<i className="fas fa-envelope prefix"></i>
														<input
															type="email"
															id="modalLRInput10"
															className="form-control form-control-sm validate"
														/>
														<label
															data-error="wrong"
															data-success="right"
															forHTML="modalLRInput10">
															Your email
														</label>
													</div>

													<div className="md-form form-sm mb-4">
														<i className="fas fa-lock prefix"></i>
														<input
															type="password"
															id="modalLRInput11"
															className="form-control form-control-sm validate"
														/>
														<label
															data-error="wrong"
															data-success="right"
															forHTML="modalLRInput11">
															Your password
														</label>
													</div>
													<div className="text-center mt-2">
														<button className="btn btn-info">
															Log in <i className="fas fa-sign-in ml-1"></i>
														</button>
													</div>
												</div>

												<div className="modal-footer">
													<div className="options text-center text-md-right mt-1">
														<p>
															Not a member?{" "}
															<a href="#" className="blue-text">
																Sign Up
															</a>
														</p>
														<p>
															Forgot{" "}
															<a href="#" className="blue-text">
																Password?
															</a>
														</p>
													</div>
													<button
														type="button"
														className="btn btn-outline-info waves-effect ml-auto"
														data-dismiss="modal"
														onClick={this.handleClose}>
														Close
													</button>
												</div>
											</div>

											<div className="tab-pane fade" id="panel8" role="tabpanel">
												<div className="modal-body">
													<div className="md-form form-sm mb-5">
														<i className="fas fa-envelope prefix"></i>
														<input
															type="email"
															id="modalLRInput12"
															className="form-control form-control-sm validate"
														/>
														<label
															data-error="wrong"
															data-success="right"
															forHTML="modalLRInput12">
															Your email
														</label>
													</div>

													<div className="md-form form-sm mb-5">
														<i className="fas fa-lock prefix"></i>
														<input
															type="password"
															id="modalLRInput13"
															className="form-control form-control-sm validate"
														/>
														<label
															data-error="wrong"
															data-success="right"
															forHTML="modalLRInput13">
															Your password
														</label>
													</div>

													<div className="md-form form-sm mb-4">
														<i className="fas fa-lock prefix"></i>
														<input
															type="password"
															id="modalLRInput14"
															className="form-control form-control-sm validate"
														/>
														<label
															data-error="wrong"
															data-success="right"
															forHTML="modalLRInput14">
															Repeat password
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
