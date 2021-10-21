package blog;

import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.*;

@Repository
public class BlogRepository {
    private Connection connection = null;
    private Statement stmt = null;
    private ResultSet rs;
    private String query;

    public BlogRepository() {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println(e);
        }
        try {
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/blog", "postgres", "password");
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public void insertUser(String userid, String name) {
        query = "insert into users (userid, name) values ('" + userid + "', '" + escapeQuoteHelper(name) + "');";
        try {
            stmt = connection.createStatement();
            stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public void insertComment(String userid, String commentid, Timestamp posted, String text) {
        query = "insert into comments (userid, commentid, posted, text, likes, dislikes) values ('" + userid + "', '"
                + commentid + "', '" + posted + "', '" + escapeQuoteHelper(text) + "', 0, 0);";
        try {
            stmt = connection.createStatement();
            stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public void insertReply(String userid, String commentid, String parentid, Timestamp posted, String text) {
        query = "insert into replies (userid, commentid, parentid, posted, text, likes, dislikes) values ('" + userid
                + "', '" + commentid + "', '" + parentid + "', '" + posted + "', '" + escapeQuoteHelper(text)
                + "', 0, 0);";
        try {
            stmt = connection.createStatement();
            stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public HashMap<String, HashMap<String, String>> users() {
        HashMap<String, HashMap<String, String>> result = new HashMap<>();
        HashMap<String, String> userDetails;
        query = "select * from users;";
        try {
            stmt = connection.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                userDetails = new HashMap<>();
                String userid = rs.getString("userid");
                userDetails.put("userid", userid);
                userDetails.put("name", rs.getString("name"));
                result.put(userid, userDetails);
            }
        } catch (SQLException e) {
            System.out.println(e);
        }

        return result;
    }

    public TreeMap<String, HashMap<String, String>> comments() {
        TreeMap<String, HashMap<String, String>> result = new TreeMap<>(Collections.reverseOrder());
        HashMap<String, String> commentDetails;
        query = "select * from comments left join users on comments.userid = users.userid order by commentid asc;";
        try {
            stmt = connection.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                commentDetails = new HashMap<>();
                String commentid = rs.getString("commentid");
                commentDetails.put("name", rs.getString("name"));
                commentDetails.put("commentid", commentid);
                commentDetails.put("posted", rs.getString("posted").toString());
                commentDetails.put("text", rs.getString("text"));
                commentDetails.put("likes", rs.getString("likes").toString());
                commentDetails.put("dislikes", rs.getString("dislikes").toString());
                result.put(commentid, commentDetails);
            }
        } catch (SQLException e) {
            System.out.println(e);
        }

        return result;
    }

    public HashMap<String, List<HashMap<String, String>>> replies() {
        HashMap<String, List<HashMap<String, String>>> result = new HashMap<>();
        HashMap<String, String> replyDetails;
        query = "select * from replies left join users on replies.userid = users.userid order by commentid asc;";
        try {
            stmt = connection.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                String parentid = rs.getString("parentid");
                replyDetails = new HashMap<>();
                List<HashMap<String, String>> replyList = (result.containsKey(parentid)) ? result.get(parentid)
                        : new ArrayList<>();
                replyDetails.put("name", rs.getString("name"));
                replyDetails.put("commentid", rs.getString("commentid"));
                replyDetails.put("parentid", parentid);
                replyDetails.put("posted", rs.getString("posted").toString());
                replyDetails.put("text", rs.getString("text"));
                replyDetails.put("likes", rs.getString("likes").toString());
                replyDetails.put("dislikes", rs.getString("dislikes").toString());
                replyList.add(replyDetails);
                Collections.sort(replyList, new Comparator<HashMap<String, String>>() {
                    public int compare(HashMap<String, String> one, HashMap<String, String> two) {
                        return one.get("commentid").compareTo(two.get("commentid"));
                    }
                });
                result.put(parentid, replyList);
            }
        } catch (SQLException e) {
            System.out.println(e);
        }

        return result;
    }

    public void addLike(String commentid, String table) {
        query = "update " + table + " set likes = likes + 1 where " + table + ".commentid = '" + commentid + "';";
        try {
            stmt = connection.createStatement();
            stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public void addDislike(String commentid, String table) {
        query = "update " + table + " set dislikes = dislikes + 1 where " + table + ".commentid = '" + commentid + "';";
        try {
            stmt = connection.createStatement();
            stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    private String escapeQuoteHelper(String input) {
        int curr = input.indexOf("'", 0), length = input.length();
        while (curr != -1) {
            input = input.substring(0, curr) + "'" + input.substring(curr, length);
            length++;
            curr = input.indexOf("'", curr + 2);
        }
        return input;
    }

}
