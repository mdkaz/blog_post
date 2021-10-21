package blog;

import blog.BlogService;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
class BlogController {

    @Autowired
    BlogService service;

    @Autowired
    ObjectMapper mapper;

    // adds a user
    @PostMapping(path = "/users/add/{name}")
    public HashMap<String, String> addUser(@PathVariable String name) {
        return service.insertUser(name);
    }

    // adds a comment under a users id
    @PostMapping(path = "/comments/add/{name}/{posted}/{text}")
    public Map<String, String> addComment(@PathVariable String name, @PathVariable String posted,
            @PathVariable String text) {
        System.out.println(posted);
        return service.insertComment(name, posted, text);
    }

    // adds a reply to a specified comment
    @PostMapping(path = "/replies/add/{name}/{parentid}/{posted}/{text}")
    public Map<String, String> addReply(@PathVariable String name, @PathVariable String parentid,
            @PathVariable String posted, @PathVariable String text) {
        System.out.println(posted);
        return service.insertReply(name, parentid, posted, text);
    }

    // currently unused, but would return a json of all replies (no comments)
    @GetMapping(path = "/getReplies/{parentid}")
    public ObjectNode getReplies(@PathVariable String parentid) {
        ObjectNode objectNode = mapper.createObjectNode();
        ArrayNode array = mapper.valueToTree(service.getReplies(parentid));
        objectNode.put("numReplies", service.getReplies(parentid).size());
        objectNode.set("replies", array);
        return objectNode;
    }

    // get full comment section, used to populate comments on the frontend
    @GetMapping(path = "/getCommentSection")
    public ObjectNode getCommentSection() {
        ObjectNode result = mapper.createObjectNode();
        result.put("num", service.numComments() + service.numReplies());
        result.set("commentSection", mapper.valueToTree(service.getCommentSection()));
        return result;
    }

    // add a like
    @PatchMapping(path = "/addLike/{commentid}")
    public void addLike(@PathVariable String commentid) {
        service.addLike(commentid);
    }

    // add a dislike
    @PatchMapping(path = "/addDislike/{commentid}")
    public void addDislike(@PathVariable String commentid) {
        service.addDislike(commentid);
    }

    // toggle from like to dislike
    @PatchMapping(path = "/likeToDislike/{commentid}")
    public void switchLike(@PathVariable String commentid) {
        service.switchLike(commentid);
    }

    // toggle from dislike to like
    @PatchMapping(path = "/dislikeToLike/{commentid}")
    public void switchDislike(@PathVariable String commentid) {
        service.switchDislike(commentid);
    }
}
