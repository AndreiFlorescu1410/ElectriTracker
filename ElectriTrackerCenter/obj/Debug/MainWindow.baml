   M S B A M L   `   `   `  ����d  `Microsoft.Maps.MapControl.WPF, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35tRclr-namespace:Microsoft.Maps.MapControl.WPF;assembly=Microsoft.Maps.MapControl.WPFMicrosoft.Maps.MapControl.WPF  5   	    ElectriTrackerCenter%   ElectriTrackerCenter.MainWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   `mRclr-namespace:Microsoft.Maps.MapControl.WPF;assembly=Microsoft.Maps.MapControl.WPF     5   	     � Title$  ElectriTrackerCenter��5   	   $��620.5��6&   $��958.5��65    � WindowState$ 	Maximized=�6C   ���	#FFF9EFEC.��5      � -   5         �Name$
 grid��5      $��0,0,0,-3q�6    J� RenderTransformOrigin$ 0.493,0.587&�6+    � ColumnDefinitions 5   
   �� 5      .+�5
   
   �� -   5        $��lvDataBinding��5
   '   $��
10,10,0,10q�6   $
��Left=�6<   $	��345��6W   ��5      �� 5      .R�5      ��  ��Name$ canvas1��6   -   5        $	��321��5   H   ��6.   �� *Marime+.+�5      �� $
��Left=�6>   
���   �$��320.75��6h    � UseLayoutRounding .  $	��160��6�   $ -0.107,0.488&�6�   ��6%   �� *	Culoare+6�   �� 5      $	��Top=�69   $ 0.474,0.077&�6Q   $��28��6u   $��22(�6�   {�.  $��Center=�6�   $
��Bold"�6�   $��0q�6�    �� Left$ 10��6�   
 �� Top$ 32��6�   $	��192��6  ��6    �� *Name+6  �� 5      $	��Top=�6;   $ 0.474,0.077&�6S   $��28��6w   $��12(�6�   {�.  $��Center=�6�   $��Normal"�6�   $��0q�6�   $ 5��6�   $ -3��6�   $	��192��6  $��Italic$�6  ��6    �� *Numars+6  �� 5      $
��Fill=�6:   $��35��6I   $��35��6T   	 �� Right$	 55��6`   $ 30��6r   ��6    �� *Status+6r   �� 5      -   5        $��phone-call-icon.png��5       $
��Fill=�6=   $��35��6L   $��35��6W   $ 0.385,-0.135&�6c   $	 10��6�   $ 30��6�   6�   �� 5      $��35��6    $		 100��6,   $��123.png��6?   $
��Fill=�6P   $��35��6_   $ 30��6�   y�6k   �� *	Urgenta+6�   �� 5      $��battery-polarity-icon.png��6    $
��Fill=�6C   $��30��6R   $��30��6]   $ 9��6i   $
 80.5��6y   �� 5      $	��Top=�6<   $ 0.517,0.507&�6T   $��30��6x   {�.  $
��Bold"�6�   $��Center=�6�   $��0q�6�   
 � IsSharedSizeScope
 . $
��Left=�6�   $��46��6  $ 44��6  $ 80��6+  $��14(�6;  ��6    �� *	Battery+6;  �� 5      
���   �$��1q�65   $
��Left=�6I   $��1��6d   $	��Top=�6o   $	��300��6�   $ 0.5,0.5&�6�   $ 8��6�   $ 74��6�   {�.  z�5      V� 5   "   .~�5   &   ��  �� ScaleY$ -1Q�65   �� 5   &   �� 5   &   T� 5   &   5   #   5      �� 5       $��location-icon.png��6    $
��Fill=�6;   $��30��6J   $��30��6U   $ 95��6a   $
 80.5��6r   �� 5!      $	��Top=�6=   $ 0.517,0.507&�6U   $��30��6y   {�.  $
��Bold"�6�   $��Center=�6�   $��0q�6�   
 . $
��Left=�6�   $	��164��6  $��14(�6  $	 126��6*  $ 80��6<  ��6    �� *
Location+6<  5"      5$      5'      '   !Microsoft.Maps.MapControl.WPF.Map  5(   
   -   5          Name$ myMap��5(      +   %Microsoft.Maps.MapControl.WPF.MapCore   CredentialsProviderT   NMicrosoft.Maps.MapControl.WPF.Design.ApplicationIdCredentialsProviderConverter$G A Ap4gVvrRQUa2zhIaUPIGT_bNicO8__xhWszmhYBd4VpdGn-t97y858nop95ZzSUp 6   $��360,10,10,10q�6w      Center<   6Microsoft.Maps.MapControl.WPF.Design.LocationConverter$ 44.42677,26.10254 6�      	ZoomLevel$ 11Q�6�   5*      �� 5+   
   -   5         ��Name$ eroare2��5+      $��
LOADING...��6!   $��Center=�66   $��Center=�6S   $	��206��6n   $	��950��6{   $��36(�6�   $��Center=�6�   $��Center=�6�   $��0,174,0,213q�6�   
���   ����	#00000000$
��Bold"�6  �� 5,   
   -   5        $ eroare��5,      $�� ��6    $��36(�6+   $��Gill Sans MT)�6:   $��10,402,-80,83q�6T   ���	#FF170404$��Italic$�6�   $	��108��6�   $��Center=�6�   $��Center=�6�   $y�Hidden=�6�   �� 5-   
   -   5         ��Name$ eroare2xbutton��5-      $��	10,10,0,0q�6(   $��close-icon.png��6;   $
��Fill=�6S   $ 0.512,1.391&�6b   $��75��6�   $	��Top=�6�   $
��Left=�6�   $��81��6�   $y�Hidden=�6  �� 5.   
   -	   5        $ eroare2_Copy��5.      $%��© 2015 BASARAB,VIANU,LOVINESCU��6&   $��Right=�6O   $	��Top=�6k   $��32��6�   $	��309��6�   $��16(�6�   $��Center=�6�   $��Center=�6�   $
��Bold"�6�   $��Gill Sans MT)�6  $��0,4,10,0q�6  
���   ����	#000000006@  �� 5/   
   -
   5        $ eroare2_Copy1��5/      $��Ignorati��6'   $
��Left=�6:   $	��Top=�6U   $��64��6m   $	��146��6y   $��36(�6�   $��Center=�6�   $
��Bold"�6�   $��Gill Sans MT)�6�   $��	91,21,0,0q�6�   
���   ����	#00000000$y�Hidden=�6P  �� 52   
   -   5         ��Name$ 	checkbox1��52      $��Nu ma mai intreba��6&   $
��Left=�6B   $��	23,90,0,0q�6]   $	��Top=�6p   $	��214��6�   $��Gill Sans MT)�6�   $��20(�6�   $��Italic$�6�   $y�Hidden=�6�   �� 53   
   -   5        $ checkboxview��53      $
��Left=�6&   $	��100��6A   $��
371,21,0,0q�6N   $	��Top=�6b   $	��100��6z   $��Picture2.png��6�   $y�Hidden=�6�   54      55      