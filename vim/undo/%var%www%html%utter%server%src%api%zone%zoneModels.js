Vim�UnDo� ����u�<�I�H�	�#�v>���������Qk              
      G       G   G   G    Y�ǒ    _�                             ����                                                                                                                                                                                                                                                                                                                                                             Y��(     �                   5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             Y��?     �                 %const ModelSchema = mongoose.Schema()5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             Y��A     �                   )5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             Y��B     �                 } )5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��E     �      	   	      %const ModelSchema = mongoose.Schema({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��E     �      	   	      $const MdelSchema = mongoose.Schema({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��E     �      	   	      #const MelSchema = mongoose.Schema({5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             Y��E     �      	   	      "const MlSchema = mongoose.Schema({5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             Y��F     �      	   	      !const MSchema = mongoose.Schema({5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             Y��G     �      	   	       const Mchema = mongoose.Schema({5�_�   
                    
    ����                                                                                                                                                                                                                                                                                                                                                             Y��N     �      	   	      $const ZoneMchema = mongoose.Schema({5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             Y��P     �      	   	      #const Zonechema = mongoose.Schema({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��R     �          	      i5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��\     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��]     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��]     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��a     �                  �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�Œ     �                 %mongoose model = ('zone', ZoneSchema)5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             Y�œ     �                 &mongoose. model = ('zone', ZoneSchema)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�Ř     �                 %mongoose.model = ('zone', ZoneSchema)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�Ř     �                 $mongoose.model  ('zone', ZoneSchema)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�ř     �                 #mongoose.model ('zone', ZoneSchema)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y�ś     �                 "mongoose.model('zone', ZoneSchema)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�Ũ     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�Ÿ     �          	      import mongoose from 'mongoose'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y���     �          	      )import mongoose, {Schema} from 'mongoose'�         	    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y���     �                Pimport mongoose, {Schema}import uniqueValidator from 'mongoose-unique-validator'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y���     �                 from 'mongoose'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y���     �             �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y���     �                import mongoose, {Schema}    from 'mongoose'5�_�                             ����                                                                                                                                                                                                                                                                                                                                       
           V       Y���     �                         5�_�      !               	        ����                                                                                                                                                                                                                                                                                                                                                  V       Y���     �                5�_�       "           !   	       ����                                                                                                                                                                                                                                                                                                                                                  V       Y���     �   	                �   	          5�_�   !   #           "   
   
    ����                                                                                                                                                                                                                                                                                                                                                  V       Y���     �   	                title: 5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                  V       Y���     �                       �             5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                  V       Y���     �   
                  type: 5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                  V       Y��     �                 1export default mongoose.model('zone', ZoneSchema)5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                  V       Y��	    �                 "mongoose.model('zone', ZoneSchema)5�_�   &   (           '   	       ����                                                                                                                                                                                                                                                                                                                                                  V       Y��     �      	            {5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                  V       Y��     �                  }5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                  V       Y��    �               �                  �                 )import mongoose, {Schema} from 'mongoose'   7import uniqueValidator from 'mongoose-unique-validator'   import bcrypt from 'bcrypt'   import crypto from 'crypto'   import jwt from 'jsonwebtoken'   +import config from '../../config/config.js'       $const ZoneSchema = mongoose.Schema({       title: {          type: String       }   })       3module.exports = mongoose.model('zone', ZoneSchema)5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                  V       Y��h     �                 �      
       5�_�   *   ,           +   
        ����                                                                                                                                                                                                                                                                                                                                                  V       Y��o     �   	             5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��y     �   
             
  title: {       type: String     }5�_�   ,   .           -   	        ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��|    �   	              �   	          5�_�   -   /           .   	   	    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�ƈ     �                 name: {},5�_�   .   0           /   	       ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ɗ     �   	                �   	          5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ɨ     �                 location: {},5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�ƛ     �                   �             5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ƨ     �                   k5�_�   2   4           3      
    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�ƴ     �                   type: String,5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ƹ     �                   type: [Number]String,5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�ƹ    �               �                  �                 )import mongoose, {Schema} from 'mongoose'   7import uniqueValidator from 'mongoose-unique-validator'   import bcrypt from 'bcrypt'   import crypto from 'crypto'   import jwt from 'jsonwebtoken'   +import config from '../../config/config.js'       $const ZoneSchema = mongoose.Schema({   	  name: {       type: String,       default: ''     },     location: {       type: [Number],            },     timestamp: {}   })       3module.exports = mongoose.model('zone', ZoneSchema)5�_�   5   7           6          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y���     �                 timestamp: {}5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��     �                 jko}5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��     �                 ko}5�_�   8   :           9          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��     �                 o}5�_�   9   ;           :          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��     �                   �             5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��
     �                   �             5�_�   ;   =           <          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��    �                	    date:5�_�   <   >           =          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��f     �                 location: {5�_�   =   ?           >          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��g     �                 : {5�_�   >   @           ?      
    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��m     �                   type: [Number]5�_�   ?   A           @      
    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��n     �                   type: Number]5�_�   @   B           A      
    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��n     �                   type: ]5�_�   A   C           B          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��q     �                   type: STring]5�_�   B   D           C          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y��r     �                   type: String]5�_�   C   E           D          ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ǌ     �                 zip: {5�_�   D   F           E      
    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�ǌ     �                   type: String5�_�   E   G           F      	    ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ǎ     �               
    type: 5�_�   F               G           ����                                                                                                                                                                                                                                                                                                                               	                 V       Y�Ǒ    �               �                  �                 )import mongoose, {Schema} from 'mongoose'   7import uniqueValidator from 'mongoose-unique-validator'   import bcrypt from 'bcrypt'   import crypto from 'crypto'   import jwt from 'jsonwebtoken'   +import config from '../../config/config.js'       $const ZoneSchema = mongoose.Schema({   	  name: {       type: String,       default: ''     },     zipCodes: {       type:Array,       default: []     },     timestamp: {       type: Date,       default: Date.now     }   })       3module.exports = mongoose.model('zone', ZoneSchema)5��