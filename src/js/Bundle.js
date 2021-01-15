
getHash() {
    let hash = crypto.createHash('md5');
    for (let asset of this.assets) {
      try {
        hash.update(asset.hash);
      } catch (Ex) { // Added this clause
        console.error("Couldn't import: ", asset.name, "\n\nBecause:", Ex);
      }
    }
    return hash.digest('hex');
  }

export {getHash};