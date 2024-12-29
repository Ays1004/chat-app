import Conversation from "../models/conversationModel.js";

export const sendMessage = async (req, res) =>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.userId;

        const conversation =await Conversation.findOne({
            participants:{
                $all: {senderId, receiverId}
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
}