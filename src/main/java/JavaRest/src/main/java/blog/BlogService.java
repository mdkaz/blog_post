package blog;

import blog.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.*;

@Service
public class BlogService {

    @Autowired
    private BlogRepository repo = new BlogRepository();

    private HashMap<String, HashMap<String, String>> users;
    private TreeMap<String, HashMap<String, String>> comments;
    private HashMap<String, List<HashMap<String, String>>> replies;

    // creates new userid and calls repository to insert
    public HashMap<String, String> insertUser(String name) {
        int newId = numUsers() + 1;
        String userid = (newId < 10) ? "user0" + newId : "user" + newId;
        repo.insertUser(userid, name);
        return getUser(userid);
    }

    // creates a new comment id and calls repository to insert
    public HashMap<String, String> insertComment(String name, String posted, String text) {
        String userid = "";
        for (Map.Entry<String, HashMap<String, String>> entry : users.entrySet()) {
            if (entry.getValue().get("name").equals(name)) {
                userid = entry.getKey();
            }
        }
        int newId = numComments() + numReplies() + 1;
        String commentid = (newId < 10) ? "comm0" + newId : "comm" + newId;
        repo.insertComment(userid, commentid, Timestamp.valueOf(posted), text);
        return getComment(commentid);
    }

    // creates a new reply assigned under a specific commentid
    public HashMap<String, String> insertReply(String name, String parentid, String posted, String text) {
        String userid = "";
        for (Map.Entry<String, HashMap<String, String>> entry : users.entrySet()) {
            if (entry.getValue().get("name").equals(name)) {
                userid = entry.getKey();
            }
        }
        int newId = numComments() + numReplies() + 1;
        String commentid = (newId < 10) ? "comm0" + newId : "comm" + newId;
        repo.insertReply(userid, commentid, parentid, Timestamp.valueOf(posted), text);
        return getReply(parentid, commentid);
    }

    // returns a list of hashmaps representing a comment thread
    public List<HashMap<String, List<HashMap<String, String>>>> getCommentSection() {
        comments = repo.comments();
        replies = repo.replies();
        List<HashMap<String, List<HashMap<String, String>>>> result = new ArrayList<>();
        HashMap<String, List<HashMap<String, String>>> thread;
        List<HashMap<String, String>> comment;
        for (Map.Entry<String, HashMap<String, String>> entry : comments.entrySet()) {
            thread = new HashMap<>();
            comment = new ArrayList<>();
            comment.add(entry.getValue());
            thread.put("comment", comment);
            thread.put("replies", getReplies(entry.getKey()));
            result.add(thread);
        }
        return result;
    }

    // returns a user based on userid
    public HashMap<String, String> getUser(String userid) {
        users = repo.users();
        return users.get(userid);
    }

    // returns a comment based on a commentid
    public HashMap<String, String> getComment(String commentid) {
        comments = repo.comments();
        return comments.get(commentid);
    }

    // returns a reply based on commentid and parent's commentid
    public HashMap<String, String> getReply(String parentid, String commentid) {
        replies = repo.replies();
        for (HashMap<String, String> r : replies.get(parentid)) {
            if (r.get("commentid").equals(commentid)) {
                return r;
            }
        }
        return new HashMap<String, String>();
    }

    // returns a List of hashmaps representing a reply thread (no comment)
    public List<HashMap<String, String>> getReplies(String parentid) {
        replies = repo.replies();
        return replies.get(parentid);
    }

    // simple function to get the number of users
    public int numUsers() {
        users = repo.users();
        return users.size();
    }

    // simple function to get the number of comments
    public int numComments() {
        comments = repo.comments();
        return comments.size();
    }

    // function to get the number of replies
    public int numReplies() {
        int numReplies = 0;
        replies = repo.replies();
        for (Map.Entry<String, List<HashMap<String, String>>> entry : replies.entrySet()) {
            numReplies += entry.getValue().size();
        }
        return numReplies;
    }

    // determines if post is a comment or reply and sends like to repo
    public void addLike(String commentid) {
        if (comments.containsKey(commentid)) {
            repo.addLike(commentid, "comments");
        } else {
            repo.addLike(commentid, "replies");
        }
    }

    // determines if post is a comment or reply and sends dislike to repo
    public void addDislike(String commentid) {
        if (comments.containsKey(commentid)) {
            repo.addDislike(commentid, "comments");
        } else {
            repo.addDislike(commentid, "replies");
        }
    }

    // determines if post is a comment or reply and calls repository to switch like
    // to dislike
    public void switchLike(String commentid) {
        if (comments.containsKey(commentid)) {
            repo.switchLike(commentid, "comments");
        } else {
            repo.switchLike(commentid, "replies");
        }
    }

    // determines if post is a comment or reply and calls repository to switch
    // dislike to like
    public void switchDislike(String commentid) {
        if (comments.containsKey(commentid)) {
            repo.switchDislike(commentid, "comments");
        } else {
            repo.switchDislike(commentid, "replies");
        }
    }

}
