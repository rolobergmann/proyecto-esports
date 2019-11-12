import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

export const HomeInfo = () => (
	<MDBContainer className="mt-5 text-center">
		<MDBRow>
			<MDBCol>
				<MDBJumbotron style={{ padding: 0 }}>
					<MDBCol
						className="text-white text-center py-5 px-4 my-5"
						style={{
							backgroundImage: `url(https://images.clarin.com/2019/10/29/mundial-de-league-of-legends___5xo-1Dg7_1200x0__1.jpg)`
						}}>
						<MDBCol className="py-5">
							<MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
								Create your beautiful website with MDBootstrap
							</MDBCardTitle>
							<p className="mx-5 mb-5">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam,
								voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla
								ipsum dignissimos. Odit sed qui, dolorum!
							</p>
							<MDBBtn outline color="white" className="mb-5">
								<MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
							</MDBBtn>
						</MDBCol>
					</MDBCol>
				</MDBJumbotron>
			</MDBCol>
		</MDBRow>
	</MDBContainer>
);
