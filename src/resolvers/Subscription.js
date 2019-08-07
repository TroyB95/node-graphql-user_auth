import { isContext } from "vm";

function newLinkSubscribe(parent, args, conext, info) {
  return isContext.prisma.$subscribe.ink({ mutation_in: ["CREATED"] }).node();
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload;
  },
};

module.exports = {
  newLink,
};
