import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Navigation, Footer } from "@components/organisms";
import dummyFooterContent from "@components/organisms/Footer/dummyContent";
import { closeAddedToBasketDialog as closeAddedToBasketDialogAction } from "@actions";
import AddedToBasketDialog from "@components/molecules/Dialog/AddedToBasket/AddedToBasket";
import { connect } from "react-redux";
import faker from "faker";
import { primary, secondary } from "@constants/kinds";

import BasicTemplate from "./BasicTemplate";

const MainTemplate = ({
  children,
  basket,
  closeAddedToBasketDialog,
  footerKind,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicTemplate>
      <Navigation />
      <div className="main-wrapper">
        <main>{children}</main>
        <Footer
          brands={dummyFooterContent.brands}
          copyrightImages={dummyFooterContent.copyrightImages}
          kind={footerKind}
        />
      </div>
      <AddedToBasketDialog
        isActive={basket.isDialogActive}
        onClose={closeAddedToBasketDialog}
        addedProduct={{ ...basket.addedProduct, count: 1 }}
        recommendedProducts={[...Array(12).keys()].map(() => ({
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(2314, 12545), 10),
          score: Math.random() * 4 + 1,
          img: faker.image.abstract(300, 300),
          reviewsCount: parseInt(Math.random() * 50 + 1, 10),
        }))}
      />
    </BasicTemplate>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  basket: PropTypes.shape({
    price: PropTypes.number,
    products: PropTypes.array,
    isDialogActive: PropTypes.bool,
    addedProduct: PropTypes.object,
  }).isRequired,
  closeAddedToBasketDialog: PropTypes.func.isRequired,
  footerKind: PropTypes.oneOf([primary, secondary]),
};

MainTemplate.defaultProps = {
  footerKind: primary,
};

const mapStateToProps = (state) => {
  const { basket } = state;
  return { basket };
};

const mapDispatchToProps = (dispatch) => ({
  closeAddedToBasketDialog: (product) =>
    dispatch(closeAddedToBasketDialogAction(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
