Vim�UnDo� �W)�р?��
�縑yJ����Y�o�_{�   +   })   )                           Z{��    _�                     
       ����                                                                                                                                                                                                                                                                                                                                                             Y�x     �   
      #    �   
      #    5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             Y�y     �   	      $          default: '1'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�     �      !   %        �         $    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�     �      !   '    �          '    5�_�                        (    ����                                                                                                                                                                                                                                                                                                                                                             Y�     �      !   (      (      required: [true, "can't be blank"]5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             Y�     �      !   (        title: String,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�     �         *      	  title:      {5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             Y�     �          )          String,5�_�      
           	   !   (    ����                                                                                                                                                                                                                                                                                                                                                             Y�     �       "   )      )      required: [true, "can't be blank"],5�_�   	              
   !   '    ����                                                                                                                                                                                                                                                                                                                                                             Y�     �   !   #   *              �   !   #   )    5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             Y�    �               �                  �              *   )import mongoose, {Schema} from 'mongoose'       const RoomSchema = Schema({     channel_id: {       type: String,       default: ''     },   
  level: {       type: String,       default: '1',   (      required: [true, "can't be blank"]     },     creator: {       type: String,       default: ''     },     people: {       type: Number,       default: ''     },     private: Boolean,     between: Array,   
  title: {       type: {         type: String,         unique: true       },       default: ''     },   
  title: {       type: String,              default: '',   (      required: [true, "can't be blank"]     },         timestamp: {       type: Date,       default: Date.now     }   })       1export default mongoose.model('room', RoomSchema)5�_�                    #        ����                                                                                                                                                                                                                                                                                                                                                             Y��    �   "   #           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       Y��     �         )    �         )    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       Y��     �      	   .      
  level: {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       Y��     �      	   .        : {5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                V       Y��     �   	      .          default: '1',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       Y��     �   
             &    required: [true, "can't be blank"]5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       Y��    �               �                  �              -   )import mongoose, {Schema} from 'mongoose'       const RoomSchema = Schema({     channel_id: {       type: String,       default: ''     },     language: {       type: String,       default: '',     },   
  level: {       type: String,       default: '1',   &    required: [true, "can't be blank"]     },     creator: {       type: String,       default: ''     },     people: {       type: Number,       default: ''     },     private: Boolean,     between: Array,   
  title: {       type: {         type: String,         unique: true       },       default: ''     },   
  title: {       type: String,       default: '',   &    required: [true, "can't be blank"]     },     timestamp: {       type: Date,       default: Date.now     }   })       1export default mongoose.model('room', RoomSchema)5�_�                   &       ����                                                                                                                                                                                                                                                                                                                                                             Z{~�     �   &   (   -    �   &   '   -    5�_�                    (        ����                                                                                                                                                                                                                                                                                                                            (          +          V       Z{~�    �   '   (            timestamp: {       type: Date,       default: Date.now     }5�_�                    &       ����                                                                                                                                                                                                                                                                                                                            (          (          V       Z{��     �   %   (   *        },5�_�                     )        ����                                                                                                                                                                                                                                                                                                                            )          )          V       Z{��    �   (   *   +      })5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             Z{~�     �   '   (   -    �   '   (   -        {timestamps: true}5��