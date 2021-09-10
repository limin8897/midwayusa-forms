function context() {
  return {
    show: 'contact',
    openContact() {
      this.show = 'contact';
    },
    openProduct() {
      this.show = 'product';
    },
    isContact() {
      return this.show === 'contact';
    },
    isProduct() {
      return this.show === 'product';
    },
    title() {
      if (this.show === 'contact') {
        return "We'd love to hear your feedback";
      }
      return 'Product Suggestion Form';
    }
  };
}
