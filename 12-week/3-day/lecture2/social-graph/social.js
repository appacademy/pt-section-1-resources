// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // INCREMENT AND THEN ASSIGN
    // this.currentID++;
    // this.currentID = this.currentID + 1;
    // INCREMENT THEN ASSIGN IN ONE LINE!
    const userId = ++this.currentID; // this.currentID = 0 -> 1
    this.users[userId] = { id: userId, name };
    this.follows[userId] = new Set();
    return userId;
  }

  getUser(userID) {
    // // checking to see if that userID is in our this.users obj
    // if (this.users[userID]) return this.users[userID]
    // return null;
    // ternary
    // condition ? val if condition is true : val if condition is false
    // return this.users[userID] ? this.users[userID] : null;
    // JS short-circuiting method
    return this.users[userID] || null;
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) {
      return false;
    }

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const userFollowers = new Set();

    for (let user in this.follows) {
      if (this.follows[user].has(userID)) userFollowers.add(Number(user));
    }

    return userFollowers;
  }

  getRecommendedFollows(userID, degrees) {
    // queue for breath-first traversal!
    let queue = [[userID]];

    // return val
    let recommended = [];

    // set to keep track of visited users in the social graph
    let visited = new Set();
    // add og user so we don't cycle back
    visited.add(userID);

    // while there are paths in the q...
    while (queue.length) {
      // shift off first path
      let path = queue.shift();

      // variable to keep track of last user at end of path
      let id = path[path.length - 1];

      // if we've gone too far (more degrees of separation than we're looking for) then stop
      if (path.length > degrees + 2) break;

      // we only want to push users that are not the og user or that user's follows (user is the start of the path, and that user's follows would be the second user in the path)
      if (path.length > 2) recommended.push(id);

      // this.follows is an adjacency list, so let's use it to get neighbors (follows) of the last user in our path
      for (let follow of this.follows[id]) {
        // if we haven't already visited that neighbor...
        if (!visited.has(follow)) {
          // add it to the visited set
          visited.add(follow);
          // add the path + that neighbor back into our q (making sure to not mutate path!)
          queue.push(path.concat([follow]));
        }
      }
    }

    // after q is empty or we broke out of the while loop -> return!
    return recommended;
  }
}

module.exports = SocialNetwork;
